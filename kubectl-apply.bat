@echo off
REM Apply the Kubernetes deployment configuration
kubectl apply -f k8s/deployment.yaml

REM Apply the Kubernetes service configuration
kubectl apply -f k8s/service.yaml

kubectl apply -f seed-job.yaml

REM List all deployments to verify the deployment status
kubectl get deployments

REM List all pods to check the status of the pods
kubectl get pods

REM List all services to verify the service status
kubectl get services