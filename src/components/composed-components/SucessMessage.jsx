export const SuccessMessage = ({ closeMessage, messageClose }) => {
    return (
        <>

            <div
                className={`
    success-wrapper
    ${messageClose ? "closed" : "open"}
    fixed inset-0 flex items-center justify-center
  `}
            >
                <div
                    className="message-close absolute top-4 right-4 cursor-pointer"
                    onClick={closeMessage}
                >
                    X
                </div>

                <div className="success-Text text-center px-6 py-4">
                    <h2>Thank You, Our Team will get back to you!</h2>
                </div>
            </div>

            {/* <div className={`success-wrapper ${messageClose ? 'closed' : 'open'}`}>

                <div className="message-close"  onClick={closeMessage}>X</div>

                <div className="success-Text">
                    <h2>Thank You, Our Team will get back to you!</h2>
                </div>
            </div> */}

        </>
    )
}