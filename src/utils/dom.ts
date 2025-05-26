/**
 * Helper for making Elements with attributes
 * @param tagName           - new Element tag name
 * @param classNames  - list or name of CSS class
 * @param attributes        - any attributes
 * @returns
 */
export function make(tagName: string, classNames: string[] | string | null = null, attributes: { [key: string]: string | boolean } = {}): HTMLElement {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames !== null) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    if (attributes.hasOwnProperty(attrName)) {
        const value = attributes[attrName];

        console.log(typeof value)
        if (typeof value === 'boolean') {
            (el as HTMLElement).setAttribute(attrName, value ? 'true' : 'false');
        } else {
            (el as HTMLElement).setAttribute(attrName, value);
        }
    }
  }

  return el;
}
