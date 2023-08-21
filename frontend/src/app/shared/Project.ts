export class Project {
    title: String;
    type: String;
    imageUrl: String;
    url: String;

    constructor(title: String, type: String, imageUrl: String, url: String) {
        this.title = title;
        this.type = type;
        this.imageUrl = imageUrl;
        this.url = url
    }
}