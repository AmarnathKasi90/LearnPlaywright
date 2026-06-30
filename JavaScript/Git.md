
The U against each file means those files are Untracked in Git.

In simple words:

Git has detected these files in your project folder

But they are not yet added to version control

This usually happens when:

You created new files

Or copied files into the project

But did not run git add

To start tracking them, run:

git add .
or for a specific file:

git add 09_var_let_const.js
After that:

U will disappear 

 The files will move to the staged area 

 Then you can commit them 

git commit -m "Added JavaScript practice files"
In VS Code Source Control:

U = Untracked 

M = Modified 

A = Added 

D = Deleted 

So in your screenshot, Git is simply telling you:

“These files are new and not yet tracked.”