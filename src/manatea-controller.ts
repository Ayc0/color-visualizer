import { ReactiveController, ReactiveControllerHost } from "lit";

import { Tea, Cup, Listener } from "manatea";

export class ManateaController<T extends Tea> implements ReactiveController {
  private host: ReactiveControllerHost;
  cup: Cup<T>;
  private listener: Listener;

  constructor(host: ReactiveControllerHost, cup: Cup<T>) {
    this.host = host;
    host.addController(this);

    this.cup = cup;

    // Update base component
    this.listener = cup.on(() => this.host.requestUpdate());
  }

  hostDisconnected() {
    // disconnect listener
    this.listener();
  }
}
