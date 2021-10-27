export function hoverAtMouse(e: React.MouseEvent, elementId: string): void {
  const left = `${e.clientX}px`;
  const top = `${e.clientY}px`;
  const div = document.querySelector(`#${elementId}`) as HTMLElement;
  div!.style.left = left;
  div!.style.top = top;
  div!.style.display = e.type == "mouseleave" ? "none" : "block";
}