import FormatView from "./FormatView.js";

export default class extends FormatView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard | Vanilla Single Page - Naufal Akbar Nugroho");
  }

  async getHtml() {
    return `
            <h1>Hai, Nopal</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum earum culpa molestias itaque repudiandae hic laboriosam atque cupiditate? Molestiae nemo fugiat illo error corporis, recusandae et ipsum! Animi, soluta harum.
            </p>
            <p>
                <a href="/vanilla-singlepage/posts" data-link>View recent posts</a>.
            </p>
        `;
  }
}
