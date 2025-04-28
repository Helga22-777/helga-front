const UPLOAD_URL = 'http://localhost:8080/upload';
const FILES_URL = 'http://localhost:8080/files';

/**
 * @param {{ uploadInput: HTMLElement; uploadProgress: HTMLElement; files: HTMLElement }} options
 */
export async function main({ uploadInput, uploadProgress, files }) {
	uploadInput.addEventListener('change', function (e) {
		const files = e.target.files;
		if (files.length === 0) {
			console.log(`${files.length} files found.`);
			return;
		}

		const file = files[0];
		const formData = new FormData();
		formData.append('file', file);
		upload(formData);
	});

	await fetchList();

	async function fetchList() {
		const res = await fetch(FILES_URL);
		const json = await res.json();

		const fragment = document.createDocumentFragment();

		for (const { file } of json) {
			const li = document.createElement('li');
			const anchor = document.createElement('a');
			anchor.href = `${FILES_URL}/${file}`;
			anchor.innerText = file;
			li.appendChild(anchor);
			fragment.appendChild(li);
		}

		files.replaceChildren(fragment);
	}

	function upload(formData) {
		const xhr = new XMLHttpRequest();

		uploadProgress.hidden = false;
		xhr.upload.onprogress = function (event) {
			console.log(event);
			const size = parseInt((event.loaded / event.total) * 100);
			console.log(size + '%');
			uploadProgress.value = size;
		};

		xhr.onload = function () {
			console.log('done');
			uploadProgress.value = 0;
			uploadProgress.hidden = true;
			uploadInput.value = null;
			fetchList();
		};

		xhr.open('POST', UPLOAD_URL);
		xhr.send(formData);
	}

	files.addEventListener('click', function (event) {
		event.preventDefault();

		const target = event.target;
		read(target.getAttribute('href'));
	});

	async function read(href) {
		const res = await fetch(href);
		const reader = res.body.getReader();
		let charsReceived = 0;

		const contentLength = res.headers.get('content-length');
		const chunks = [];

		uploadProgress.value = 0;
		uploadProgress.hidden = false;
		reader.read().then(function processText({ done, value }) {
			if (done) {
				console.log('Stream complete');
				uploadProgress.hidden = true;
				uploadProgress.value = 0;
				const blob = new Blob(chunks);
				download(blob, href.split('/').at(-1));
				return;
			}

			chunks.push(value);
			charsReceived += value.length;
			uploadProgress.value = parseInt((charsReceived / contentLength) * 100);

			return reader.read().then(processText);
		});
	}

	function download(blob, file) {
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = file;

		document.body.appendChild(anchor);
		anchor.click();

		anchor.remove();
	}
}
