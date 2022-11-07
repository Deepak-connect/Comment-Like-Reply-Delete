let userInput = document.getElementById('userinput');
let addBtn = document.getElementById('inputBtn');


// adding new note
addBtn.addEventListener('click', () => {
    if (userInput.value == 0) {
        alert('Write Something to add')
    }
    else {
        let displayNote = `
            <div class="main-comment">
                <div class="comment">
                    <p class="comment-text">
                        ${userInput.value}
                    </p>
                    <div class="comment-footer">
                        <span class="like"><i class="fa-solid fa-thumbs-up"></i> (0)</span>
                        <span class="reply"><i class="fa-solid fa-reply"></i> Reply</span>
                        <span class="delete"><i class="fa-solid fa-trash"></i> Delete</span>
                    </div>
                </div>
            </div>
        `
        let displayArea = document.querySelector('.display-area');
        displayArea.insertAdjacentHTML("afterbegin", displayNote);
        userInput.value = "";
    }


    //like button
    let like = document.querySelector('.like');
    let likeCount = 0;
    like.addEventListener('click', (e) => {
        let likeEl = e.target;
        likeCount = likeCount + 1;
        like.innerText = `Like (${likeCount})`;

    })

    //Reply
    let replyBtn = document.querySelector('.reply');
    replyBtn.addEventListener('click', (e) => {
        let replyText = prompt("Add your reply.");
        if (replyText != 0) {
            let commentReply = `
            <div class="comment-reply">
                <div class="comment-reply-box">
                    <p class="comment-reply-text">
                    ${replyText}
                    </p>
                    <div class="comment-reply-footer">
                        <span class="delete-reply"><i class="fa-solid fa-trash"></i> Delete</span>
                    </div>
                </div>
            </div>`
            let replyEl = e.target.parentNode.parentNode.parentNode;
            // let mainComment = document.querySelector('.main-comment');
            replyEl.insertAdjacentHTML('afterend', commentReply);
        }
        else {
            alert('Write Something to add reply');
        }


        // del reply only
        let delReply = document.querySelector('.delete-reply');
        delReply.addEventListener('click', (e) => {
            let replyDel = e.target.parentNode.parentNode.parentNode;
            replyDel.remove();
        })

    })


    //delete comment with its nested reply(if exist)
    let delBtn = document.querySelector('.delete');
    delReply = document.querySelector('.delete-reply');
    delBtn.addEventListener('click', (e) => {
        let delEl = e.target.parentNode.parentNode;
        delEl.remove();

        //delete reply
        delReply = document.querySelector('.delete-reply');
        delReply.parentNode.parentNode.parentNode.remove();
    })


})//main eventListener


