import React, { useEffect, useState } from "react";
import SuprSendInbox from "@suprsend/react-inbox";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl">Suprsend Notification Inbox task</h2>
      <SuprSendInbox
        workspaceKey={import.meta.env.VITE_WORKSPACE_KEY}
        subscriberId={import.meta.env.VITE_SUBSCRIBER_ID}
        distinctId={import.meta.env.VITE_DISTINCT_ID}
      ></SuprSendInbox>
    </div>
  );
}

export default App;
