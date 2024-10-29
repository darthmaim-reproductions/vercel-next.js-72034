import { FC } from "react";
import { ClientComponent } from "./client-component";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <ClientComponent>
      <ServerComponent/>
    </ClientComponent>
  );
}

const ServerComponent: FC = async () => <div>server component</div>
