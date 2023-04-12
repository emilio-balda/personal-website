HOOK_TYPES_TO_INSTALL=(
  'commit-msg'
  'pre-commit'
  'pre-merge-commit'
  'pre-push'
  'post-commit'
  'post-checkout'
)

for HOOK_TYPE in "${HOOK_TYPES_TO_INSTALL[@]}"; do
  pre-commit uninstall --hook-type $HOOK_TYPE
done
