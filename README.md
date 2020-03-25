# doorman

## Install and configure the Amplify CLI.

```bash
npm install -g @aws-amplify/cli
```

## amplify

```bash
amplify init
# app: doorman
# env: demo

amplify auth add
amplify analytics add
amplify hosting add

amplify api add

amplify push
amplify publish
```

## rewrite

```
</^[^.]+$|\.(?!(js|css|gif|ico|jpg|png|svg|txt|json|map|woff|ttf)$)([^.]+$)/>    /index.html    200
```
