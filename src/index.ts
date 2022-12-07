import "./index.styl";

const conceptAreas = Array.from(
  document.getElementsByClassName("concept-area")
);

function onChildrenOfTagName(
  element: Element,
  tagName: string,
  callback: (element: Element) => void
) {
  const children = Array.from(element.children);
  children.forEach((element: Element) => {
    if (element.tagName === tagName) {
      callback(element);
    }
  });
}

function magnify(element: HTMLElement) {
  let isMagnified = false;
  return () => {
    isMagnified = !isMagnified;
    element.dataset.magnified = `${isMagnified}`;
  };
}

conceptAreas.forEach((conceptArea: Element) => {
  console.log("hi");
  onChildrenOfTagName(conceptArea, "div", (childElement: Element) => {
    const childDivElement = childElement as HTMLDivElement;
    childDivElement.onclick = magnify(childDivElement);
  });
});
