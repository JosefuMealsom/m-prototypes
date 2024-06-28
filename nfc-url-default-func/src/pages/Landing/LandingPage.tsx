import { useEffect, useState } from "react";
import HeaderDark from "../../components/HeaderDark";
import SavedContentService from "../../services/saved-content.service";
import LandingPageInfoComponent from "./LandingPageInfoComponent";
import parseIdsFromQuery from "../../services/query-parser.service";
import copyData from "../../data/copy.json";

export default function LandingPage() {
  const [scannedContent, setScannedContent] = useState(
    SavedContentService.getAllSavedContent()
  );

  // Not the best place to put this, but ok for now
  useEffect(() => {
    const ids = parseIdsFromQuery();

    for (const id of ids) {
      if (!SavedContentService.findSavedContent(id)) {
        SavedContentService.saveContent(id);
      }
    }
    setScannedContent(SavedContentService.getAllSavedContent());
  }, []);

  function renderListInfoComponents() {
    if (!scannedContent) {
      return null;
    }

    return scannedContent.map((itemId: number) => (
      <div className="mb-2" key={itemId}>
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
