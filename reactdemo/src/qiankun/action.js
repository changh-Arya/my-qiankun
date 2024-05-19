class Actions {
  actions = {
    onGlobalStateChange: null,
    setGlobalState: null,
  };

  setActions(actions) {
    this.actions = actions;
  }

  onGlobalStateChange() {
    return this.actions.onGlobalStateChange(...arguments);
  }

  setGlobalState() {
    return this.actions.setGlobalState(...arguments);
  }
}
export default new Actions()