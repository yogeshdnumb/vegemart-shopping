#!/bin/bash -x

: "${1?"Usage: $0 component_name [folder]"}"

if [ -z "${2%/}" ];then
    dir="src/components"
else
    dir="${2%/}"
fi


mkdir -p "${dir}/${1}"

touch "${dir}/${1}/${1}.jsx" "${dir}/${1}/${1}.module.css"
vscodium "${dir}/${1}/${1}.jsx" "${dir}/${1}/${1}.module.css"