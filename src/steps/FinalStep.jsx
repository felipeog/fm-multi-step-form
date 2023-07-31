import { Header } from "../components/Header";
import { ReactComponent as IconThankYou } from "../assets/icon-thank-you.svg";

export function FinalStep() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
      <IconThankYou />

      <Header
        title="Thank you!"
        subtitle="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
      />
    </div>
  );
}
