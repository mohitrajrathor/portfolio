#!/bin/bash

echo "Deploying to github pages...";

if [ $(pwd) != "/home/mohitrajrathor/projects/portfolio" ]; then
    echo "please run this script in ../../portfolio"
    exit 1

fi


echo "building project"
yarn build


echo "moving to $(pwd)/dist"
cd "$(pwd)/dist"

echo "committing changes..."
git add .
git commit -m "deploying"

echo "pushing to github..."
git push origin gh-pages


echo "Deployment complete!"