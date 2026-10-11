# Tax Calculator — Cloud Modernization Project

This is a starter implementation for the Coursera/IBM assignment. It includes a Node.js/Express app, progressive calculation demo, Jasmine tests, Docker, and Tekton YAML templates.

**Important:** This is newly created starter code, not the original course boilerplate. The tax brackets are illustrative only, not official tax rates or tax advice. Confirm the course lab's required language, exact service, tax rules, and evidence filenames.

## Run locally
Requires Node.js 20+.
```bash
npm install
npm test
npm start
```
Open http://localhost:3000 and check http://localhost:3000/health.

## Docker
```bash
docker build -t tax-calculator:latest .
docker run --rm -d --name tax-calculator -p 3000:3000 tax-calculator:latest
docker ps
docker logs tax-calculator
```
Open http://localhost:3000. Stop with `docker stop tax-calculator`.

## IBM Cloud Container Registry
Install IBM Cloud CLI and the container-registry plugin, sign in, create a registry namespace, then:
```bash
ibmcloud login
ibmcloud cr region-set <REGION>
ibmcloud cr login
ibmcloud cr namespace-list
docker tag tax-calculator:latest <REGISTRY_HOST>/<NAMESPACE>/tax-calculator:v1
docker push <REGISTRY_HOST>/<NAMESPACE>/tax-calculator:v1
```
Replace placeholders with your account's real values. Never commit secrets.

## IBM Cloud deployment
Use the target service specified by your course lab (for example, Code Engine or Kubernetes). You must configure your IBM Cloud account, registry access, project/cluster, and credentials. Deploy the pushed image, verify the real URL, and save the deployment status and browser screenshot. This package alone cannot create a deployment in your account.

## Tekton
The `tekton/` directory contains illustrative task, pipeline, and PipelineRun YAML. It assumes Tekton and the `git-clone` task are installed. Configure registry credentials and replace all placeholders. The deploy task is intentionally a placeholder that stops rather than pretending a cloud deployment succeeded; replace it with the actual deployment commands and secret setup from your lab.

```bash
kubectl apply -f tekton/tasks.yaml
kubectl apply -f tekton/pipeline.yaml
# Edit tekton/pipelinerun.yaml before applying:
kubectl apply -f tekton/pipelinerun.yaml
kubectl get pipelineruns
kubectl get taskruns
```

## Evidence to collect from your real environment
- Jasmine passing test output
- Dockerfile screenshot
- Docker build output
- Local container and browser screenshot
- Registry push output
- IBM Cloud deployment status and live URL screenshot
- Tekton task definitions
- Pipeline YAML
- Successful PipelineRun/TaskRun output
- Screenshot verifying the pipeline-built image is deployed
- GitHub repository URL and epic/story screenshots

Do not submit fabricated logs or mock deployment screenshots as real evidence.
