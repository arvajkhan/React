function Message(){
  const hasMessage = true;
  return(
    <div>
      {hasMessage && <p>You Have a new Message!</p>}
    </div>
  )
}
export default Message;