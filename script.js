document.getElementById('submitBtn').addEventListener('click', function () {
    var bookType = document.getElementById('bookType').value;
    var bookTitle = document.getElementById('bookTitle').value;
    var author = document.getElementById('author').value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var review = document.getElementById('review').value;

    var emptyFields = [];

    if (!bookType) {
        emptyFields.push('Select Book Type');
    }
    if (!bookTitle) {
        emptyFields.push('Book Title');
    }
    if (!author) {
        emptyFields.push('Author');
    }
    if (!rating) {
        emptyFields.push('Rating');
    }
    if (!review) {
        emptyFields.push('Review');
    }

    if (emptyFields.length > 0) {
        alert('Please fill out the following fields:\n' + emptyFields.join(', '));
        return false;
    } else {
        alert('Submission successful! Thank you for your feedback.');
    }
});

document.getElementById('review').addEventListener('input', function () {
    var maxLength = 200;
    var currentLength = document.getElementById('review').value.length;
    var charactersRemaining = maxLength - currentLength;

    document.getElementById('charCount').innerText = 'Characters remaining: ' + charactersRemaining;
});
