(function () {
  const
    workspaceMenu = document.getElementById('workspace-menu'),
    workspaceSplitter = document.getElementById('workspace-splitter'),
    btnActive = document.getElementsByClassName('active')[0];

  let isWorkspaceResize;
  let isSecondaryMenuHidden;

  // SPLITTER CODE BELOW

  const openSecondaryMenu = () => {
    const secondaryMenu = document.getElementsByClassName('ni-sidebar-menu-secondary')[0];
    if (secondaryMenu && isSecondaryMenuHidden) {
      secondaryMenu.classList.remove('d-none');
      workspaceMenu.style.minWidth = null;
      isSecondaryMenuHidden = false;
    }
  }

  const closeSecondaryMenu = () => {
    const secondaryMenu = document.getElementsByClassName('ni-sidebar-menu-secondary')[0];
    if (secondaryMenu && !isSecondaryMenuHidden) {
      secondaryMenu.classList.add('d-none');
      workspaceMenu.style.minWidth = 0;
      isSecondaryMenuHidden = true;
    }
  }

  btnActive.onclick = (e) => {
    if (isSecondaryMenuHidden) {
      openSecondaryMenu();
    } else {
      closeSecondaryMenu();
    }
  }

  workspaceSplitter.ondblclick = (e) => {
    e.preventDefault();
    isWorkspaceResize = false;
    workspaceMenu.style.minWidth = null;
    workspaceMenu.style.maxWidth = null;
  }

  workspaceSplitter.onmousedown = (e) => {
    e.preventDefault();
    isWorkspaceResize = true;
  }

  document.onmousemove = (e) => {
    if (isWorkspaceResize) {
      workspaceSplitter.style.position = 'absolute';
      workspaceSplitter.style.left = e.pageX + 'px';

      if (e.pageX < 250 && !isSecondaryMenuHidden) {
        closeSecondaryMenu();
      } else if (e.pageX >= 300 && e.pageX <= screen.availWidth * 0.75) {
        openSecondaryMenu();
        workspaceMenu.style.minWidth = e.pageX + 'px';
        workspaceMenu.style.maxWidth = e.pageX + 'px';
      }
    }
  }

  document.onmouseup = () => {
    isWorkspaceResize = false;
    workspaceSplitter.style.position = null;
    workspaceSplitter.style.left = null;
  }

  // SPLITTER CODE ENDS

  // CODE EDITOR BUTTON

  const btnCodeEditor = document.getElementById('btn-code-editor'),
    workspaceCodeEditor = document.getElementById('workspace-code-editor'),
    open = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 3 7 L 3 25 L 29 25 L 29 7 Z M 5 9 L 21 9 L 21 23 L 5 23 Z M 23 9 L 27 9 L 27 23 L 23 23 Z M 12.28125 11.28125 L 8.28125 15.28125 L 7.59375 16 L 8.28125 16.71875 L 12.28125 20.71875 L 13.71875 19.28125 L 11.4375 17 L 19 17 L 19 15 L 11.4375 15 L 13.71875 12.71875 Z"></path><rect x="22" y="8" width="6" height="16"></rect></svg>',
    close = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path fill="currentColor" d="M 3 7 L 3 25 L 29 25 L 29 7 Z M 5 9 L 21 9 L 21 23 L 5 23 Z M 23 9 L 27 9 L 27 23 L 23 23 Z M 14.71875 11.28125 L 13.28125 12.71875 L 15.5625 15 L 8 15 L 8 17 L 15.5625 17 L 13.28125 19.28125 L 14.71875 20.71875 L 18.71875 16.71875 L 19.40625 16 L 18.71875 15.28125 Z"></path><rect x="22" y="8" width="6" height="16"></rect></svg>';

  let isCodeEditorOpen = false;

  btnCodeEditor.innerHTML = open; // for FIRST LOAD

  btnCodeEditor.onclick = (e) => {
    isCodeEditorOpen = !isCodeEditorOpen;
    if (!isCodeEditorOpen) {
      workspaceCodeEditor.classList.remove('open');
      btnCodeEditor.innerHTML = open;
    } else {
      workspaceCodeEditor.classList.add('open');
      btnCodeEditor.innerHTML = close;
    }
  }

  // CODE EDITOR BUTTON ENDS

})();