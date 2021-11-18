BUCKET_NAME=$1
FILE_PATH=$2

aws \
  s3 cp $FILE_PATH s3://$BUCKET_NAME \
  # --endpoint-url=http://localhost:4566

aws \
  s3 ls s3://$BUCKET_NAME \
  # --endpoint-url=http://localhost:4566