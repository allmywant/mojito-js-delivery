module.exports = {
    // Name of the container file excluding the file extension (e.g. "name" yields "name.js" when published)
    containerName: 'mojito',
    // Development S3 container
    s3BucketDev: 'mojito-js/jsdev',
    // Production S3 container
    s3BucketPRD: 'mojito-js/js',
    // S3 Region
    s3Region: 'ap-southeast-2',
    // allow Mojito load more than one times
    allowMultiInstance: false,
    // Lifecycle Events conf
    lifecycleEvents: {
        ci: {
            branch: 'your-production-branch'
        },
        analytics: {
            snowplow: {
                appId: 'your-app-id',
                collectorUrl: 'your.collector.com'
            }
        }
    }
};