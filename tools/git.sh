#!/bin/bash


# Git Setup Multiple Repository
git remote add gitlab git@gitlab.com:cellarium/admin.git
git remote set-url --add --push origin git@gitlab.com:cellarium/admin.git

git remote add github git@github.com:Cellarium0/Admin.git
git remote set-url --add --push origin git@github.com:Cellarium0/Admin.git


# Display Config
git remote show origin

git config --list
