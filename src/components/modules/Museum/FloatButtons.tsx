import { CircleHelp, Info, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import InfoDialog from "./InfoDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionDialog from "./QuestionDialog";

function FloatButtons() {
  const router = useRouter();

  return (
    <>
      <div className="fixed left-10 top-10 z-10 select-none">
        <Button className="bg-primary/60" onClick={() => router.push("/")}>
          <div className="flex items-center gap-2">
            <MoveLeft className="text-white" />
            <span>Quay lại</span>
          </div>
        </Button>
      </div>
      <div className="fixed right-10 top-10 z-10 flex flex-col gap-4">
        <InfoDialog />
        <QuestionDialog />
      </div>
    </>
  );
}

export default FloatButtons;
