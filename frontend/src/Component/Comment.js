import React, { useState } from 'react'

function Comment({ comment, handleDelete, handleUpdate, updatedComment, setUpdatedComment}) {
    const [conditionInput, setConditionInput] = useState(false)
    return (
        <div>
            <h3 data-id={comment.id}>{comment.comment}</h3>
            {/* <form onSubmit={(e) => handleUpdate(e, comment, updatedComment)}>
                <input key={comment.id} onChange={event => setUpdatedComment(event.target.value)}></input>
                <button className="button">Update</button>
            </form> */}
            {conditionInput ? 
                <form onSubmit={(e) => handleUpdate(e, comment, updatedComment)}>
                    <input key={comment.id} onChange={event => setUpdatedComment(event.target.value)}></input>
                    <button className="button">Update</button>
                </form> 
                    : 
                null
            }
                <button className="button" onClick={() => setConditionInput(!conditionInput)}>Edit</button>
            
            <button className="button" onClick={(e) => handleDelete(e, comment)}>Delete</button>
        </div>
    )
}

export default Comment
