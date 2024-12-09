interface DocumentPreviewProps {
  presignedUrl: string;
}

const DocumentPreview = ({ presignedUrl }: DocumentPreviewProps) => {
  return (
    <div>
      <h3>Document Preview</h3>
      <iframe
        src={presignedUrl}
        style={{
          width: '100%',
          height: '100vh',
          border: '1px solid #ccc',
        }}
        title="Document Preview"
      ></iframe>
    </div>
  );
};

export default DocumentPreview;
