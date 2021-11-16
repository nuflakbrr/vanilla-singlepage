import FormatView from "./FormatView.js";

export default class extends FormatView {
  constructor(params) {
    super(params);
    this.setTitle("Settings | Vanilla Single Page - Naufal Akbar Nugroho");
  }

  async getHtml() {
    return `
            <h1>Settings</h1>
            <p>Manage your privacy and configuration.</p>
        `;
  }
}
