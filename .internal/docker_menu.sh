#!/bin/bash

CPWD=$(pwd)

cd .internal/ 2>/dev/null

if [ "$1" = "stop" ]; then
  bash ./ctrl_api.sh stop
  bash ./ctrl_wui.sh stop
  bash ./ctrl_pycli.sh stop
else
  bash ./ctrl_api.sh
  bash ./ctrl_wui.sh
  bash ./ctrl_pycli.sh
fi

cd $CPWD
