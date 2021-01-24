import checkNode from "cli-check-node"
import welcome from "cli-welcome"
import updateNotifier from "update-notifier"
import * as pkgJSON from "../../package.json"

export function initCLI() {
  checkNode(`12`)

  welcome({
    title: "Chakra UI CLI",
    tagLine: `by chakra UI\n${pkgJSON.description}`,
    bgColor: `#319795`,
    color: `#FFFFFF`,
    bold: true,
    clear: false,
    version: pkgJSON.version,
  })

  updateNotifier({
    pkg: pkgJSON,
    shouldNotifyInNpmScript: true,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 3, // 3 days
  }).notify({ isGlobal: true })
}