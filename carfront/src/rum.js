import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'carfront',
  // Set the version of your application
  // Used on the APM Server to find the right sourcemap
  serviceVersion: '',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://724511c913704649997916cbe02ebba4.apm.europe-west1.gcp.cloud.es.io:443',
  // For distributed tracing to different origin (CORS)
   distributedTracingOrigins: ['http://localhost:8080'],

   propagateTracestate: true,
})

export default apm;