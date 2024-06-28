class SavedContentService {
  saveContent(contentId: number) {
    const content = this.getAllSavedContent();

    if (!content) {
      localStorage.setItem("savedContent", JSON.stringify([contentId]));
      return;
    }

    if (!content.includes(contentId)) {
      content.push(contentId);
      localStorage.setItem("savedContent", JSON.stringify(content));
    }
  }

  findSavedContent(contentId: number) {
    return this.getAllSavedContent()?.includes(contentId);
  }

  getAllSavedContent() {
    const content = localStorage.getItem("savedContent");

    if (!content) return undefined;
    return JSON.parse(content);
  }
}

export default new SavedContentService();
