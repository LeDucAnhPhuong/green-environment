import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:bg-primary-dark rounded-full bg-primary/60 px-4 py-4 transition-all">
          <div className="flex items-center gap-2">
            <Info className="text-white" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Triễn lãm kỷ niệm 25 năm FPT Education</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p className="mt-4">
            Triển lãm kỷ niệm 25 năm FPT Education là sự kiện triển lãm về lịch
            sử phát triển của FPT Education từ khi thành lập đến nay. Sự kiện
            được tổ chức tại trụ sở chính của FPT Education tại Hà Nội.
          </p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default InfoDialog;
