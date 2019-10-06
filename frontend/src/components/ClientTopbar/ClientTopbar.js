import FontIcon from "material-ui/FontIcon"
import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { withRouter } from "react-router"

const infoIcon = <FontIcon className="material-icons">info_outline</FontIcon>
const allocationIcon = <FontIcon className="material-icons">apps</FontIcon>
const statsIcon = <FontIcon className="material-icons">show_chart</FontIcon>
const evaluationIcon = <FontIcon className="material-icons">share</FontIcon>
const rawIcon = <FontIcon className="material-icons">code</FontIcon>

class _ClientTopbar extends PureComponent {
  handleActive(tab) {
    const path = ["", "nomad", this.props.router.params.region, "clients", this.props.node.ID, tab]
    this.props.router.push(path.map(encodeURIComponent).join("/"))
  }

  getActiveTab() {
    const location = this.props.location
    const end = location.pathname.split("/").pop()

    if (end.startsWith("info")) {
      return 0
    }

    if (end.startsWith("stats")) {
      return 1
    }

    if (end.startsWith("allocations")) {
      return 2
    }

    if (end.startsWith("evaluations")) {
      return 3
    }

    if (end.startsWith("raw")) {
      return 4
    }

    return 0
  }

  getStyle() {
    return {
      clear: "both",
    }
  }

  render() {
    return (
      <BottomNavigation showLabels value={this.getActiveTab()} style={this.getStyle()}>
        <BottomNavigationAction label="Info" icon={infoIcon} onClick={() => this.handleActive("info")} />
        <BottomNavigationAction label="Stats" icon={statsIcon} onClick={() => this.handleActive("stats")} />
        <BottomNavigationAction
          label="Allocations"
          icon={allocationIcon}
          onClick={() => this.handleActive("allocations")}
        />
        <BottomNavigationAction
          label="Evaluations"
          icon={evaluationIcon}
          onClick={() => this.handleActive("evaluations")}
        />
        <BottomNavigationAction label="Raw" icon={rawIcon} onClick={() => this.handleActive("raw")} />
      </BottomNavigation>
    )
  }
}

_ClientTopbar.propTypes = {
  router: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired
}

const ClientTopbar = withRouter(_ClientTopbar)

export default ClientTopbar
