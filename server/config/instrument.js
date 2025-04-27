// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://4793a1dc677081917be73e48da4733c3@o4509218535178240.ingest.us.sentry.io/4509218564603904",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations:[Sentry.mongoIntegration()],
});