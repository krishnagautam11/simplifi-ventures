export const SuccessMessage = ({closeMessage, messageClose }) => {
    return (
        <>
            <div className={`success-wrapper ${messageClose ? 'closed' : 'open'}`}>

                <div className="message-close"  onClick={closeMessage}>X</div>

                <div className="success-Text">
                    <h2>Thank You, Our Team will get back to you!</h2>
                </div>
            </div>

        </>
    )
}