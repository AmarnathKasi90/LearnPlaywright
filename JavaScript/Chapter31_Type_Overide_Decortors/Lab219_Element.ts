let element: unknown = {
    tagname: "Button",
    textContext: "Submit",
    id: "submit-btn",
    isDisabled: false
}

interface ElementI {
    tagname: string;
    textContext: string;
    id: string;
    isDisabled: boolean
}

let button = element as ElementI
console.log(button.tagname);
