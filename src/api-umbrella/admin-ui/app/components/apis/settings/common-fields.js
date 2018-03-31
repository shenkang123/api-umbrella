import Component from '@ember/component';
import { t } from 'api-umbrella-admin-ui/utils/i18n';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.requireHttpsOptions = [
      { id: null, name: t('admin.api.settings.require_https_options.inherit') },
      { id: 'required_return_error', name: t('Required - HTTP requests will receive a message to use HTTPS') },
      { id: 'transition_return_error', name: t('Transitionary - Optional for existing API keys, required for new API keys') },
      { id: 'optional', name: t('Optional - HTTPS is optional') },
    ];

    this.disableApiKeyOptions = [
      { id: null, name: t('Inherit (default - required)') },
      { id: false, name: t('Required - API keys are mandatory') },
      { id: true, name: t('Disabled - API keys are optional') },
    ];

    this.apiKeyVerificationLevelOptions = [
      { id: null, name: t('Inherit (default - none)') },
      { id: 'none', name: t('None - API keys can be used without any verification') },
      { id: 'transition_email', name: t('E-mail verification transition - Existing API keys will continue to work, new API keys will only work if verified') },
      { id: 'required_email', name: t('E-mail verification required - Existing API keys will break, only new API keys will work if verified') },
    ];

    this.passApiKeyOptions = [
      { id: 'header', name: t('Via HTTP header') },
      { id: 'param', name: t('Via GET query parameter') },
    ];

    this.anonymousRateLimitBehaviorOptions = [
      { id: 'ip_fallback', name: 'IP Fallback - API key rate limits are applied as IP limits' },
      { id: 'ip_only', name: 'IP Only - API key rate limits are ignored (only IP based limits are applied)' },
    ];

    this.authenticatedRateLimitBehaviorOptions = [
      { id: 'all', name: 'All Limits - Both API key rate limits and IP based limits are applied' },
      { id: 'api_key_only', name: 'API Key Only - IP based rate limits are ignored (only API key limits are applied)' },
    ];
  },
});
