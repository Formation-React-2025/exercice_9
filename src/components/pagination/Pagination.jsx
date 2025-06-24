import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  ArrowLeft, ArrowRight, DoubleArrowLeft, DoubleArrowRight,
} from '../icons/pagination';
import PaginationArrow from './arrows/PaginationArrow';
import PaginationItem from './item/PaginationItem';
import './Pagination.css';

const calcNbPages = (pageSize, total) => (total / pageSize);

const calcPages = (pageSize, total) => {
  const tab = [];
  const numberOfPages = calcNbPages(pageSize, total);
  for (let i = 0; i < numberOfPages; i++) {
    tab.push(i + 1);
  }

  return tab;
};

const Pagination = ({
  onPageChange = (newPageNumber) => { console.log(`onPageChange(${newPageNumber})`)},
  pageSize = 10,
  total = 0,
}) => {
  const [
    currentState,
    setCurrentState,
  ] = useState({
    activePage: 1,
    pages: [],
  });

  useEffect(() => {
    const pages = calcPages(pageSize, total);
    const activePage = Math.max(1, Math.min(currentState.activePage, pages.length));
    setCurrentState({
      ...currentState,
      activePage,
      pages,
    });
  }, [
    pageSize, total,
  ]);

  useEffect(() => onPageChange(currentState.activePage), [
    currentState.activePage,
  ]);

  const setActivePage = (activePage) => setCurrentState({
    ...currentState,
    activePage,
  });

  return (
    <div className="pagination">
      <PaginationArrow
        disabled={currentState.pages.length === 0 || currentState.activePage === 1}
        onClick={() => setActivePage(currentState.activePage - 1)}
      >
        <ArrowLeft />
      </PaginationArrow>

      {currentState.pages?.length > 0 && (
        <PaginationItem
          active={currentState.activePage === 1}
          pageNumber={1}
          onClick={() => setActivePage(1)}
        />
      )}

      {currentState.pages?.length > 6 && currentState.activePage > 5 && (
        <PaginationArrow
          onClick={() => setActivePage(currentState.activePage - 5)}
        >
          <DoubleArrowLeft />
        </PaginationArrow>
      )}

      {currentState.pages.filter((p) => {
        if (p === 1 || p === currentState.pages.length) {
          return false;
        }

        if (currentState.pages.length < 7) {
          return true;
        }

        if (currentState.pages.length < 11) {
          return currentState.activePage < 6 ? (p < 6) : (p > 5);
        }

        if (currentState.activePage < 6) {
          return (p < 8);
        }

        if (currentState.activePage > currentState.pages.length - 5) {
          return (p > (currentState.pages.length - 7));
        }

        return (p > (currentState.activePage - 3)) && (p < (currentState.activePage + 3));
      }).map((pageNumber) => (
        <PaginationItem
          key={`page-${pageNumber}`}
          active={currentState.activePage === pageNumber}
          pageNumber={pageNumber}
          onClick={() => setActivePage(pageNumber)}
        />
      ))}

      {currentState.pages.length > 6 && (currentState.activePage < currentState.pages.length - 4 && (
        <PaginationArrow
          onClick={() => setActivePage(currentState.activePage + 5)}
        >
          <DoubleArrowRight />
        </PaginationArrow>
      ))}

      {currentState.pages.length > 1 && (
        <PaginationItem
          active={currentState.activePage === currentState.pages.length}
          pageNumber={currentState.pages.length}
          onClick={() => setActivePage(currentState.pages.length)}
        />
      )}

      <PaginationArrow
        disabled={currentState.pages.length === 0 || currentState.activePage === currentState.pages.length}
        onClick={() => setActivePage(currentState.activePage + 1)}
      >
        <ArrowRight />
      </PaginationArrow>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  pageSize: PropTypes.number,
  total: PropTypes.number,
};

export default Pagination;
