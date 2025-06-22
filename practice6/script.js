const box = document.getElementById('box');

function updateBoxMetrics() {
  document.getElementById('scrollTopVal').textContent = box.scrollTop;
  document.getElementById('clientHeightVal').textContent = box.clientHeight;
  document.getElementById('offsetHeightVal').textContent = box.offsetHeight;
}

function updateDocMetrics() {
  document.getElementById('docScrollTop').textContent = document.documentElement.scrollTop;
  document.getElementById('docClientHeight').textContent = document.documentElement.clientHeight;
  document.getElementById('docScrollHeight').textContent = document.documentElement.scrollHeight;
}

// Trigger updates on scroll and on page load
box.addEventListener('scroll', updateBoxMetrics);
window.addEventListener('scroll', updateDocMetrics);
window.addEventListener('load', () => {
  updateBoxMetrics();
  updateDocMetrics();
});
