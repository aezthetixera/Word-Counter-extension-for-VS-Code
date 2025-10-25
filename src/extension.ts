import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('word-counter.countWords', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active text editor!');
      return;
    }

    const document = editor.document;
    let text: string;

    const selection = editor.selection;
    if (selection && !selection.isEmpty) {
      text = document.getText(selection);
    } else {
      text = document.getText();
    }

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Показываем результат
    vscode.window.showInformationMessage(`Word count: ${wordCount}`);
  });

  context.subscriptions.push(disposable);
}
export function deactivate() {}