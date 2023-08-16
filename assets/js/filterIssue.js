// accessing form by Id
let filterIssueForm = document.getElementById('filter-issue-form');
// get the details of the issues of the project in json
let issuesJson = document.getElementById('issue-data').getAttribute('data');

//parssing issue data
let issues = JSON.parse(issuesJson);

//issue container to show the issue cards
let issueList = document.getElementById('issues-list');

//add event listener to the form
filterIssueForm.addEventListener('click', function (e) {
  
  let filteredIssues = []; //created empty array 

//  to get all form data
  let labelsList = filterIssueForm.querySelectorAll('input[type=checkbox]');
  let labelsElements = [...labelsList].filter((Element) => Element.checked);

//   accessing authors
  let authorVal = filterIssueForm.querySelector('input[type=radio][name=author]:checked').value;

  let [...labelsArr] = labelsElements.map((Element) => Element.value);

  //add issue to filteredIssue array
  issues.map((el) => {
    if (el.author == authorVal) {
      if (!filteredIssues.includes(el)) {
        filteredIssues.push(el);
        console.log(filteredIssues);
      }
    }
    labelsArr.map((label) => {
      if (el.labels.includes(label)) {
        if (!filteredIssues.includes(el)) {
          filteredIssues.push(el);
          console.log(filteredIssues);
        }
      }
    });
  });
  
  //display issues from filteredIssue in the issue container
  issueList.innerHTML = '';
  for (i=0; i< filteredIssues.length; i++) {
    issueList.innerHTML += `
    <div class="issue-card">
        <div class="issue-container">
            <div class="issue-div">
                <p><strong> Title: </strong>${filteredIssues[i].title}</p>
                <p><strong> Description: </strong>${filteredIssues[i].description}</p>
                <p><strong> Author: </strong>${filteredIssues[i].author}</p>
                <p><strong>Labels : </strong>${filteredIssues[i].labels}</p>
            </div>
        </div>
    </div>`;
  }
});
