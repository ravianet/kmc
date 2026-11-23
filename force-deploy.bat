@echo off
echo Triggering new Netlify deploy...
c:\git\bin\git.exe commit --allow-empty -m "Force Netlify deploy"
c:\git\bin\git.exe push
echo Done! Check Netlify dashboard for build status.
pause