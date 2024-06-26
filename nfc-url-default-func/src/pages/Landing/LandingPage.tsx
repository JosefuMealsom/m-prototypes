import HeaderDark from "../../components/HeaderDark";
import SavedContentService from "../../services/saved-content.service";
import LandingPageInfoComponent from "../../components/LandingPageInfoComponent";

export default function LandingPage() {
  const scannedContent = SavedContentService.getAllSavedContent();

  function renderListInfoComponents() {
    if (!scannedContent) {
      return null;
    }

    return scannedContent.map((itemId: number) => (
      <div className="mb-2">
        <LandingPageInfoComponent contentId={itemId} />
      </div>
    ));
  }

  return (
    <div>
      <HeaderDark className="p-5" />
      <div className="font-source-sans mb-5 p-3">
        <h1 className="font-black text-2xl mb-3">Your scanned content</h1>
        {renderListInfoComponents()}
      </div>
    </div>
  );
}
