import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App runtime error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '24px', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <div style={{ maxWidth: '480px', background: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#dc2626', marginBottom: '8px' }}>বাঁধন এয়ার ইন্টারন্যাশনাল ট্রাভেলস্</h2>
            <p style={{ fontSize: '14px', color: '#475569', marginBottom: '20px' }}>পেজটি লোড করতে সাময়িক সমস্যা হয়েছে। অনুগ্রহ করে রিলোড করুন।</p>
            <button
              onClick={() => window.location.reload()}
              style={{ background: '#dc2626', color: '#ffffff', padding: '10px 24px', borderRadius: '8px', border: 'none', fontWeight: 700, cursor: 'pointer' }}
            >
              রিলোড করুন (Reload Page)
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
