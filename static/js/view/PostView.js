import FormatView from "./FormatView.js";

export default class extends FormatView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("Viewing Post | Vanilla Single Page - Naufal Akbar Nugroho");
  }

  async getHtml() {
    return `
            <h1>Post</h1>
            <p>You are viewing post #${this.postId}.</p>
        `;
  }
}
