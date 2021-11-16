import FormatView from "./FormatView.js";

export default class extends FormatView {
  constructor(params) {
    super(params);
    this.setTitle("Posts | Vanilla Single Page - Naufal Akbar Nugroho");
  }

  async getHtml() {
    return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
        `;
  }
}
