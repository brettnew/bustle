import Ember from 'ember';

export default Ember.Component.extend({
  delete(story) {
    if (confirm('Are you sure you want to delete this personally curated story?')) {
      this.sendAction('destroyStory', story);
    }
  }
});
