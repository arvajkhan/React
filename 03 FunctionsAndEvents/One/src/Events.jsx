function Event() {
  const handleMouseOver = () => console.log("Mouse is over the text!")
  const handleDoubleClick = () => console.log("text double clicked")
  return (
    <>
      <p  onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quaerat.
      </p>
    </>
  );
}
export default Event;
