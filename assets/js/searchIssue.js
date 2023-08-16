// accessing form by Id
let searchIssueForm = document.getElementById('search-issue-form');
// get the details of the issues of the project in json
let searchJson = document.getElementById('issue-data').getAttribute('data');

// parse the data
let searchIssues = JSON.parse(searchJson);

//issue container to show the issue cards
let searchList = document.getElementById('issues-list');

searchIssueForm.addEventListener('input', function (e) {

  //created empty array 
  let searchedIssues = [];

  //  to get all form data

  let titleValue = searchIssueForm.querySelector('input[name="title"]').value;
  let descriptionValue = searchIssueForm.querySelector('input[name="description"]').value;

  //add issue to searchedIssues array
  searchIssues.map((el) => {
    if (el.title == titleValue || el.description == descriptionValue) {
      if (!searchedIssues.includes(el)) {
        searchedIssues.push(el);
      }
    }
  });
  //display issues from searchedIssue in the issue container
  searchList.innerHTML = '';
  for (let issue of searchedIssues) {
    searchList.innerHTML = `
        <div class="issue-card">
            <div class="issue-container">
                <div class="issue-div">
                    <p><strong> Title: </strong>${issue.title}</p>
                    <p><strong> Description: </strong>${issue.description}</p>
                    <p><strong> Author: </strong>${issue.author}</p>
                    <p><strong>Labels : </strong>${issue.labels}</p>
                </div>
            </div>
        </div>`;
    }
});