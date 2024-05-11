import React from "react";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

import * as Button from "@/components/ui/button";
import * as Form from "@/components/ui/form";
import * as Badge from "@/components/ui/badge";
import * as Card from "@/components/ui/card";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import * as Input from "@/components/ui/input";
import * as Label from "@/components/ui/label";
import * as Popover from "@/components/ui/popover";
import * as Select from "@/components/ui/select";
import * as Tabs from "@/components/ui/tabs";
import * as Toggle from "@/components/ui/toggle";
import * as Tooltip from "@/components/ui/tooltip";

function Editor() {
  const editor = useCreateBlockNote();

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      shadCNComponents={{
        Button,
        Form,
        Badge,
        Card,
        DropdownMenu,
        Input,
        Label,
        Popover,
        Select,
        Tabs,
        Toggle,
        Tooltip,
      }}
    />
  );
}

export default Editor;
